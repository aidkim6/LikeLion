import React, { useState } from 'react';
import full_heart from '../assets/img/heart.png';
import comment_img from '../assets/img/comment.png';
import empty_heart from '../assets/img/empty_heart.png';

const Article = ({ title, content }) => {
    const [isLike, setIsLike] = useState(false);
    const handleLike = () => {
        setIsLike(!isLike); 
    };

    return (
        <div id='Article_Wrap'>
            <div className='article'>
                <h2>{title}</h2>
                <p>{content}</p>
            </div>

            <div className="icon_group">
                <div className="comment">
                    <img src={comment_img} alt="comment" /> 
                    0 
                </div>
                
                <div className="heart" onClick={handleLike} style={{ cursor: 'pointer' }}>
                    <img 
                        src={isLike ? full_heart : empty_heart} 
                        alt="heart" 
                    />
                    <span>{isLike ? 1 : 0}</span>
                </div>
            </div>

            <footer>
                <input type="text" placeholder="댓글을 입력해주세요!" disabled />
                <button style={{ backgroundColor: '#92CAFF' }}>등록</button>
            </footer>
        </div>
    );
}

export default Article;