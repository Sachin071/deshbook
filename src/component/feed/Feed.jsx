import React from 'react';
import MessageSender from './MessageSender';
import Post from './Post';
import StoryReel from './StoryReel';


const Feed = () => {
  return (
    <div className='fb__feed'>
        {/* There are 3 components are structure */}
        <StoryReel /> 
        <MessageSender /> 
        <Post 
          profilePic='https://d1nslcd7m2225b.cloudfront.net/Pictures/480xany/1/2/0/1274120_marwanabdullahsaleh_005_977936.jpg'
          message= 'Wow This Works'
          timestamp='this is a time'
          username='Jitree'
          image= 'https://images.indianexpress.com/2020/11/WhatsApp-1-1.jpg'
        />
        <Post 
          profilePic='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3KED6NpVdL1GJ3nGwhzv4AlhV99bELNFk8g&usqp=CAU'
          message= 'Wow This Works'
          timestamp='this is a time'
          username='Sanggg'
          image= 'https://www.imagepicweb.com/wp-content/uploads/2022/08/WhatsApp-DP-Images-New.jpg'
        />
        <Post 
          profilePic='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrflQhvkI7kSxtFxIy1B92NnaVftPFC2AGWA&usqp=CAU'
          message= 'Wow This Works'
          timestamp='this is a time'
          username='Sonnnnnnn'
          image= 'https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/IMAGE_1661180744.jpg'
        />
       
    </div>
  )
}

export default Feed;