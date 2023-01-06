import {Card} from 'react-bootstrap';

const About = () => {

    const creators = [
        {
            name: "Caitlin O'Reilly",
            avatar: '',
            bio: 'lalala Caitlin loves frontend',
            facts: 'has 3 cats',
            favProduct: '',
            portfolioLink: '',
            gitHub: '',
            linkedIn: ''
        },
        {
            name: "Ariel Miller",
            avatar: '',
            bio: 'lalala Ariel loves backend',
            facts: 'has 2 dogs',
            portfolioLink: '',
            gitHub: '',
            linkedIn: ''
        },
        {
            name: "Valeriya Kim",
            avatar: '',
            bio: 'lalala Val loves food',
            facts: 'doesnt have pets',
            portfolioLink: '',
            gitHub: '',
            linkedIn: ''
        },
    ]



  return (
    <div>
        {creators.map((creator) => (
            <Card></Card>
        ))}
    </div>
  )
}

export default About