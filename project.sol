pragma solidity ^0.4.0;

/**
Contract meant for doing escrow activities
*/
contract blance{
  address public blanceCreator;

  // enum to maintain project status
  // 1. Deposited - this is when the project gets assigened and the amount is deposited on escrow account.
  // 2. Paid - this is when the project is complete and the freelancer gets paid completely
  // 3. Withdrawen - this is when the project is cancelled and withdrawen by project owner
  // 4. Cancelled - this is case where the project owner cancels the deal with the freelancer, it could be assigned to new freelancer
  enum ProjectStatus{
    UnKnown, Deposited, Paid, Withdrawen, Cancelled
  }

  // strut to maintian Details of one project which will help us do some actions on same

  struct BlanceEscrow{
    uint projectId;  // this is the projectid of the the projects created.
    uint256 projectCost; // this is the escrow ether to recevved and to be sent to freelancer
    ProjectStatus projectStatus; // this would tell the status of the project
    address freelancerAddress; // address of the freelancer to which we have to send the money across
  }

  // array of projects
  mapping(uint => BlanceEscrow) public projects;

  // event to inform about Paid to freelancer
  event PaymentComplete(address freelancerAddress, uint projectCost);
  // event to inform about payment to freelancer failed
  event PaymentFailed(address freelancerAddress, uint projectCost);

  function blance(){
    blanceCreator = msg.sender;
  }


  function addProject
  (uint _ProjectId,uint256 _ProjectCost, ProjectStatus _ProjectStatus,address _FreelancerAddress){
    if(projects[_ProjectId]){
      throw;
    }

    projects[_ProjectId] =  BlanceEscrow({
      projectId:_ProjectId,
      projectCost:_ProjectCost,
      projectStatus: _ProjectStatus,
      freelancerAddress:_FreelancerAddress
      })

    }

    // this modifier can be used to restrict only contract creator to enable certain activities
    modifier onlyCreator{
      if (msg.sender != blanceCreator){
        throw;
        }else{
          _
        }
      }

      /**
      ** function to be used only by the contract owver to release funds to freelancer
      */
      function projectCancelled(uint _projectId) onlyCreator{
        // this is the valid case to make payment
        if(projects[_projectId].projectStatus == ProjectStatus.Paid){
          throw;
        }
        projects[_projectId].projectStatus = ProjectStatus.Cancelled;
      }

      /**
      ** function to be used only by the contract owver to release funds to freelancer
      */
      function projectWithdrawen(uint _projectId) onlyCreator{
        // this is the valid case to make payment
        if(projects[_projectId].projectStatus == ProjectStatus.Paid){
          throw;
        }
        projects[_projectId].projectStatus = ProjectStatus.Withdrawen;
      }


      /**
      ** function to be used only by the contract owver to release funds to freelancer
      */
      function addNewFreelancer(uint _projectId,address _FreelancerAddress) onlyCreator{
        // this is the valid case to check only if the status is Cancelled we can update the freelancer address
        if(projects[_projectId].projectStatus != ProjectStatus.Cancelled){
          throw;
        }
        projects[_projectId].freelancerAddress = _FreelancerAddress;
      }

      /**
      ** function to be used only by the contract owver to release funds to freelancer
      */
      function payToFreelancer(uint _projectId) onlyCreator{
        // this is the valid case to make payment
        if(projects[_projectId].projectStatus == ProjectStatus.Deposited){
          // local variable to hold amount to be sent, in case we have to revert when the transaction fails
          var amount = projects[_projectId].projectCost;

          if (amount > 0) {
            // It is important to set this to zero because the recipient
            // can call this function again as part of the receiving call
            // before `send` returns.
            projects[_projectId].projectCost = 0;

            if (!projects[_projectId].freelancerAddress.send(amount)) {
              // No need to call throw here, just reset the amount owing
              projects[_projectId].projectCost = amount;
              PaymentFailed(projects[_projectId].freelancerAddress, amount);

              }else{
                // this is complettion block, make sure to set
                projects[_projectId].projectStatus = ProjectStatus.Paid;
                PaymentComplete(projects[_projectId].freelancerAddress, amount);
              }
            }

            }else{
              // in any other case thow exception
              throw;
            }

          }


        }
