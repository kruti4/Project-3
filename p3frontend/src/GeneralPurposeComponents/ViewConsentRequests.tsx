import React from "react";
import {
  approveConsentRequest,
  denyConsentRequest,
  getConsentByTrainerId,
} from "../api/consent";
import { Consent } from "../models/Consent";
import { ListGroup, ListGroupItem, Button } from "reactstrap";

interface IViewConsentRequestsState {
  consentRequests: Consent[];
}
export class ViewConsentRequests extends React.Component<
  any,
  IViewConsentRequestsState
> {
  constructor(props: any) {
    super(props);

    this.state = {
      consentRequests: [],
    };
  }

  // componentDidMount() {
  //   this.getConsentRequests();
  // }

  // accept = async (id: number) => {
  //   let consentRequest: Consent = this.state.consentRequests[id];
  //   consentRequest.isApproved = true;
  //   await approveConsentRequest(consentRequest);
  // };

  // decline = async (id: number) => {
  //   let consentRequest: Consent = this.state.consentRequests[id];
  //   consentRequest.isApproved = false;
  //   await denyConsentRequest(consentRequest);
  // };




  //   this.setState({
  //     consentRequests: consentRequests,
  //   });
  // };

  // render() {
  //   return (
  //     <>
  //       <h6>View Consent Requests</h6>
  //       <ListGroup>
  //         {this.state.consentRequests.map((consent: Consent, i) => {
  //           //trying to use the same item display everywhere
  //           return (
  //             <ListGroupItem key={i}>
  //               {consent.batchId}
  //               <Button
  //                 color="primary"
  //                 id={i.toString()}
  //                 onClick={() => this.accept(i)}
  //               >
  //                 Accept
  //               </Button>
  //               <Button
  //                 color="primary"
  //                 id={i.toString()}
  //                 onClick={() => this.decline(i)}
  //               >
  //                 Decline
  //               </Button>
  //             </ListGroupItem>
  //           );

  //           // <ListGroupItem key={i}>
  //           //     <Row>
  //           //         <Col xs='auto'><img src={getImageUrl(this.state.itemList[i])} style={{height:"100px", width:"auto"}} /></Col>
  //           //         <Col xs='auto'><a href='#' onClick={this.toggleRedirect} id={i.toString()}>{item.item_name}</a></Col>


  //       this.setState({
  //           consentRequests : consentRequests
  //       })
            
        
  //   }
    render(){
        return(
            <>
            {/* <h6>View Consent Requests</h6>
                    <ListGroup>
                            {this.state.consentRequests.map((consent: Consent, i) => {
                                
                                //trying to use the same item display everywhere
                                return( 
                                <ListGroupItem key={i}>
                                    
                                    
                                    
                                        
                                        <Button color="primary" id={i.toString()} onClick={()=>this.accept(i)}>Accept</Button>
                                        <Button color="primary" id={i.toString()} onClick={()=>this.decline(i)}>Decline</Button>
                                    
                                
                                </ListGroupItem>)


            //         <Col xs='auto'><Button color="primary" id={i.toString()} onClick={this.addToCart}>Add to cart</Button></Col>
            //     </Row>
            //</ListGroupItem>
          })}
        </ListGroup> */}
      </>
    );
  }
}
