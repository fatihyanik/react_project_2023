import {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext';
import FeedbackItemContext from './FeedbackItemContext';

function FeedbackListContext() {
    //console.log(feedback);

    const {feedback} = useContext(FeedbackContext)
    if (!feedback || feedback.length === 0) {
        return <p>No Feedback Yet</p>
    }

    return (
        <div className="feedback-list">
            {
                feedback.map((item) => {
                    return (
                        <FeedbackItemContext
                            key={item.id}
                            item={item}
                        />
                    )
                })
            }
        </div>
    )
}



export default FeedbackListContext