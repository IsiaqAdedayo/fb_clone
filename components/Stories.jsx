import StoryCard from "./StoryCard"


const Stories = ({ stories }) => {

    return (
        <div className="flex justify-center space-x-3 mx-auto">
            {
                stories.map(story =>( 
                    <StoryCard 
                        key={story.login.uuid} 
                        name={story.name} 
                        profile={story.picture.large}/>
                ))
            }
        </div>
    )
}



export default Stories
