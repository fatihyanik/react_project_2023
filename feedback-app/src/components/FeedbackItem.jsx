function FeedbackItem({item}) {
    console.log(item);
  return (
    <div className="card">
        <div className="num-display">{item.rating}</div>
        <div className="text-display">
            {item.text}
        </div>
    </div>
  )
}

export default FeedbackItem