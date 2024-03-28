import React, { useState } from "react";
import 'semantic-ui-css/semantic.min.css';
import { Button, Card, Divider, Image, Placeholder, Icon, Modal, Header } from 'semantic-ui-react';
import _ from "lodash";
import {Link} from "react-router-dom"; 
import {db} from "../firebase";
import { addDoc, collection } from "firebase/firestore";
import '../index.css'


const cards = [
  {
    id:1,
    avatar: 'Images/African_National_Congress_logo.jpg',
    date: 'Established in 1912',
    header: 'ANC',
    description: `South Africa's National Liberation Movement`,
  },
  {
    id:2,
    avatar: 'Images/NewDALogoResized.jpg',
    date: 'Established in 2000',
    header: 'DA',
    description: 'One Nation, One Future',
  },
  {
    id:3,
    avatar: 'Images/EFF-logo.png',
    date: 'Established in 2013',
    header: 'EFF',
    description: 'Our land and jobs, now!',
  },
]

const Parties = () =>{
  const[loading, setLoading] = useState(false);
  const[voteForA, setVoteA] = useState(0);
  const[voteForB, setVoteB] = useState(0);
  const[voteForC, setVoteC] = useState(0);
  const[voted, setVoted] = useState(false);
  const[open, setOpen] = useState(false);
  const[openVoted, setOpenVoted] = useState(false);
  const [party, setParty] = useState([])

  

  const handleLoadingClick = () => {
    setParty()
    setLoading(true);

    setTimeout(() => {
     setLoading(false);
    }, 3000)
  }

  const submitVote = () => {
    const votesRef = {
      partyA: voteForA,
      partyB: voteForB,
      partyC: voteForC
    }

    addDoc(collection(db, 'votes'), votesRef)
    .then((repsonse) => {
      console.log('Vote submitted successfully',repsonse);
      setVoted(true)
    })
    .catch((error) =>{
      console.error('Error submitting vote', error)
    })
  }
 

  return(
    <>
          <div className="nav-container">
       <nav>
          <a href="https://elections.org.za/pw/">
          <img src="Images/IEC Logo_white.svg" alt="" className="nav--logo"/>
        </a>
      </nav>
    </div>
    
    <div className="reload-container">
      <Button loading={loading} onClick={handleLoadingClick} primary>
          Reload cards
        </Button>
        <Divider />
    </div>
        <Card.Group className="container" doubling itemsPerRow={3} stackable>
          {_.map(cards, (card) => (
            <Card key={card.header}>
              {loading ?(
                <Placeholder>
                  <Placeholder.Image square className="card--image" />
                </Placeholder>
              ) : (
                <Image src={card.avatar} className="card--logo" height="200" />
              )}

              <Card.Content>
                {loading ? (
                  <Placeholder>
                    <Placeholder.Header>
                      <Placeholder.Line length='very short' />
                      <Placeholder.Line length='medium' />
                    </Placeholder.Header>
                    <Placeholder.Paragraph>
                      <Placeholder.Line length='short' />
                    </Placeholder.Paragraph>
                  </Placeholder>
                ) : (
                  <>
                    <Card.Header>{card.header}</Card.Header>
                    <Card.Meta>{card.date}</Card.Meta>
                    <Card.Description>{card.description}</Card.Description>
                  </>
                )}
              </Card.Content>

              <Card.Content extra>
                <Button disabled={voted}  onClick={ () =>
                  [
                    card.id === 1 && setVoteA(voteForA + 1),
                    card.id === 2 && setVoteB(voteForB + 1),
                    card.id === 3 && setVoteC(voteForC + 1),
                    setVoted(true),
                    setOpen(true),
                  
                  ]
                } primary>
                  Vote
                </Button>
                <Button disabled={
                (card.id === 1 && voteForA <= 0 ? true : false) 
                || 
                (card.id === 2 && voteForB <= 0 ? true : false) 
                || 
                (card.id === 3 && voteForC <= 0 ? true : false)}
                 onClick={ () =>
                  [
                    card.id === 1 && setVoteA(voteForA - 1),
                    card.id === 2 && setVoteB(voteForB - 1),
                    card.id === 3 && setVoteC(voteForC - 1),
                    setVoted(false),
                  ]
                }>Unvote</Button>
              </Card.Content>
            </Card>
          ))}
        </Card.Group>
    <Modal
      basic
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size='small'
    >
      <Header icon>
        <Icon name='archive' />
        You are about to vote for this party
      </Header>
      <Modal.Content>
        <h3>
          Are you sure you want to vote for them?
        </h3>
      </Modal.Content>
      <Modal.Actions>
        <Button basic color='red' inverted onClick={() => [setOpen(false), window.location.reload()]}>
          <Icon name='remove' /> No
        </Button>
        <Button color='green' inverted onClick={() => [setOpen(false), setOpenVoted(true) ]}>
          <Icon name='checkmark' /> Yes
        </Button>
      </Modal.Actions>
    </Modal>
    <Modal
      basic
      onClose={() => setOpenVoted(false)}
      onOpen={() => setOpenVoted(true)}
      open={openVoted}
      size='small'
      // trigger={<Button>Basic Modal</Button>}
    >
      <Header icon>
        <Icon name='archive' />
                You have voteed!
      </Header>
      <Modal.Content>
        <h3>
          Thanks! Want to see the result now?
        </h3>
      </Modal.Content>
      <Modal.Actions>
        <Button basic color='red' inverted onClick={() => [setOpenVoted(false), setOpen(false)]}>
          <Icon name='remove' /> No
        </Button>
        <Link to="/result">
          <Button color='green' inverted onClick={() => [setOpenVoted(false), setOpenVoted(true),submitVote() ]}>
          <Icon name='checkmark' /> Yes
        </Button>
        </Link>
      </Modal.Actions>
    </Modal>
    

    </>

  )
 }

export default Parties;