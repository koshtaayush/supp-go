
import { Card } from '@mui/material';
import Header from '../components/Header';
import PostCard from '../components/PostCard';
import './Home.css'

function Home() {
    return (<div className="home-page"> 
        <Header />
        <Card>
        <PostCard data={{vote: 1, views: 1, answers: 1}} />
        <PostCard data={{vote: 1, views: 1, answers: 1}} />
        <PostCard data={{vote: 1, views: 1, answers: 1}} />
        <PostCard data={{vote: 1, views: 1, answers: 1}} />
        <PostCard data={{vote: 1, views: 1, answers: 1}} />
        </Card>
    </div> );
}



export default Home;