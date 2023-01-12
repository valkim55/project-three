
import { Card } from 'react-bootstrap';
import caitlinProf from '../images/caitlin-prof.jpg';
import arielProf from '../images/ariel1.jpg';
import valProf from '../images/val-prof.jpg';



const About = () => {

    const creators = [
        {
            name: "Caitlin O'Reilly",
            firstName: "Caitlin",
            title: 'Web Developer',
            avatar:  caitlinProf ,
            bio: 'Caitlin loves frontend',
            facts: ' has 3 cats',
            favProduct: '',
            portfolioLink: '',
            gitHub: 'https://github.com/caitoreilly',

        },
        {
            name: "Ariel Miller",
            firstName: "Ariel",
            title: 'Web Developer',
            avatar: arielProf,
            bio: 'A full stack web developer with a strong proficiency in HTML, CSS, JS, MERN stack, Sequelize, MySQL, NoSQL, Mongoose, Bootstrap, and MaterializeCSS.',

            facts: ' has 2 dogs',
            favProduct: 'CeraVe Salicylic Acid Acne Treatment Control Gel',
            portfolioLink: 'https://amiller0806.github.io/HTML-Advanced-CSS-Portfolio/',
            gitHub: 'https://github.com/amiller0806',

        },
        {
            name: "Valeriya Kim",
            firstName: "Valeriya",
            title: 'Web Developer',
            avatar: valProf,
            bio: 'Val loves food',
            facts: " doesn't have pets",
            portfolioLink: '',
            gitHub: 'https://github.com/valkim55',

        },
    ]



    return (

        <div>
            <h1 class="about-us">About Us</h1>
            {creators.map((creators) => (
                <Card>
                    <Card.Body>
                        <Card.Title className="name-creator">{creators.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{creators.title}</Card.Subtitle>
                        <Card.Text>
                            <img class="prof-img" src={creators.avatar} alt= "profile pic" />

                            <p class="about-creator">About {creators.firstName}:</p>
                            <p>  {
                                creators.bio
                            } </p>
                            <p class="fun-fact">Fun Fact: &nbsp; </p>
                            <p class="creator-fact"> {creators.facts} </p>
                            <p class="faveProduct">Favorite Product: &nbsp; </p>
                            <p class="product-fave"> {
                                creators.favProduct
                            } </p>

                        </Card.Text>
                        <Card.Link href={creators.portfolioLink}>Portfolio Link</Card.Link>
                        <Card.Link href={creators.gitHub}>Github</Card.Link>

                    </Card.Body>
                </Card>
            ))}
        </div>
    )
}

export default About