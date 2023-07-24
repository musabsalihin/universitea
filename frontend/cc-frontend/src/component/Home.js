import { Link } from 'react-router-dom';
import './Home.css'
import Post from '../service/post.service';
import { useEffect, useState } from 'react';
import Posts from './Post'

const Home = () => {
    const [ posts, setPosts ] = useState([]);
    useEffect(() => {
        retrievePosts();
    },[])
    const retrievePosts = () => {
        Post.allPost()
            .then(async(res) => {
                const datas = [];
                const data = await res.data;
                for(var i in data){
                    datas.push(data[i]);
                }
                setPosts(datas);
                console.log(datas);
            })
            .catch(e => {
                console.log(e);
            })
    }
    return (
        <div>
            <Link to='/post/new' className=''>
                <label className='post-button'>Confess</label>
            </Link>
            <div className="post-body">
                <div className='search-bar'></div>
                {/* <Posts /> */}
                <ul>
                    {posts && posts.map && posts.map((post, index) => (
                        <li key={post.id}>
                            <div className='post'>
                                <div className='img-anon'></div>
                                <div className='post-content'>
                                    <p>{post.content}</p>
                                </div>
                                <div className='tea-score'>
                                    <div className='hot-vote'></div>
                                    <div className='cold-vote'></div>
                                </div>
                            </div>
                        </li>
                    )
                    )}
                </ul>
            </div>

        </div>
    );
}

export default Home;