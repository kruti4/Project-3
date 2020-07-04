import React from "react";
import { Table, Button, Container, Row, Col, Spinner } from "reactstrap";
import { Associate } from "../models/Associate";
import { getAllAssociates, updateAssociate } from "../models/Associate";
import { getBatchById } from "../api/batch";
import { Batch } from "../models/Batch";
import { ErrorAlert } from "../GeneralPurposeHelpers/ErrorAlert";
import { prnt } from "../GeneralPurposeHelpers/Prnt";
import { axiosClient } from "../api/axios";
import { DualTables } from "./DualTables";

const doPrnt = true; //prnt may be toggled

interface IASTableModelProps {
  currentBatch: Batch; //we must give this component a batch for it to work
}

interface IASTableModelState {
  //currentBatchId: number;
  associates: Associate[];
  eligibleAssociates: Associate[];
  associatesInBatch: Associate[];
  associatesLoaded: boolean;
  errorObject: any;
  errorMessage: string;
}

/*
  <ASTableModel currentBatch={aBatchObject}/>

  displays the associates assigned to the given batch object.
  associates can be assigned or removed from the batch.
*/

export default class ASTableModel extends React.Component<
  IASTableModelProps,
  any
> {
  constructor(props: IASTableModelProps) {
    super(props);
    this.state = {
      eligibleAssociates: [], //interview score >70 and no assigned batch yet
      associatesLoaded: false, //have we fetched the associates from the backend?
      errorObject: null, //when set to an axios error object, it will display the network error nicely
      errorMessage: "", //when set a message it will be displayed, possibly with a network error
    };
  }

  componentDidMount = async () => {
    console.log(`ASTableModel componentDidMount() has been reached`);

    try {
      const allAssociates: Associate[] = await getAllAssociates();
      //prnt(doPrnt, `associateArray=`, allAssociates)

      const eligibleAssociateArray = allAssociates.filter((assoc) => {
        return assoc.interviewScore >= 70 && assoc.active === false;
        //return assoc.interviewScore >= 70 && assoc.batchId <=0;
      });

      this.setState({
        eligibleAssociates: eligibleAssociateArray,
        associatesLoaded: true,
      });
    } catch (e) {
      this.setState({
        errorObject: e,
        errorMessage: "Could not retrieve all associates",
      });
    }
  };

  render() {
    //prnt(doPrnt,`ASTableModel render() has been reached`)
    //prnt(doPrnt,`this.state.associatesInBatch=`,this.state.associatesInBatch)
    //prnt(doPrnt,`this.props.currentBatch.associates=`,this.props.currentBatch.associates)
    //prnt(doPrnt,`this.props.currentBatch=`,this.props.currentBatch)

    if (this.props.currentBatch == null)
      return <>ASTableModel this.props.currentBatch is null</>;

    return (
      <Container>
        <ErrorAlert
          error={this.state.errorObject}
          message={this.state.errorMessage}
        />

        {this.state.associatesLoaded ? (
          <DualTables
            onMoveToLeft={(item) => this.patchTheAssoc(item, false)}
            onMoveToRight={(item) => this.patchTheAssoc(item, true)}
            arrayLeft={this.state.eligibleAssociates}
            messageLeft="None in the system"
            messageRight="None assigned to this batch"
            arrayRight={this.props.currentBatch.associates}
            headerLeft={
              <>
                All eligible associates{" "}
                <b>{this.state.eligibleAssociates.length}</b>
              </>
            }
            headerRight={
              <>
                Associates in batch{" "}
                <b>{this.props.currentBatch.associates.length}</b>
              </>
            }
          />
        ) : (
          <Spinner />
        )}
      </Container>
    );
  }

  /*
    patchTheAssoc(assoc,moveToBatch)

    patches the assoc object.
    when moveToBatch is:
      true, the assoc is assigned to the currentBatch object
      false, the assoc is assigned to no batch at all. null
  */
  patchTheAssoc = async (assoc: Associate, moveToBatch: boolean) => {
    prnt(doPrnt, `ASTableModel patchTheAssoc() has been reached`);
    prnt(doPrnt, `assoc before=`, assoc);

    //send an associate and its batch object that is a non-circular data structure
    //Assoc->Batch->Associate[]->Batch was breaking when being sent
    //we want to send this data to the server for it to save directly into the repo
    const nonCircularAssocPatch = {
      associateId: assoc.associateId, //copy over all fields. typescript prevents easier copying
      firstName: assoc.firstName,
      lastName: assoc.lastName,
      email: assoc.email,
      active: moveToBatch, //set active to true or false
      interviewScore: assoc.interviewScore,
      batch: moveToBatch ? this.props.currentBatch : null, //assign to a batch.
      //we have to watch out because this batch has an array of
      //associates and associates have batches and we get circular json errors when sending
      //this is why express exists
    };

    prnt(doPrnt, `nonCircularAssocPatch=`, nonCircularAssocPatch);
    //prnt(doPrnt, `assoc.batch=`, assoc.batch);
    //prnt(doPrnt, `this.props.currentBatch=`, this.props.currentBatch);

    try {
      await axiosClient.patch("/associates", nonCircularAssocPatch);
    } catch (e) {
      this.setState({
        errorObject: e,
        errorMessage: "Could not patch associate",
      });
    }
  };
}
