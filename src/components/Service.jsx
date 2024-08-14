import "/src/css/Service.css"

export default function Service({headingText, subText}) {
  return (
    <div className="service-wrapper">
        <div className="service-text">
            <h1 className="service-heading">{headingText}</h1>
            <p className="service-subtext" dangerouslySetInnerHTML={{ __html: subText }}/>
        </div>
    </div>
  )
}
