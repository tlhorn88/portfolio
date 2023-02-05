import './SectionTitle.css';

function SectionTitle( props ) {
    const title = props.title
    return (
        <div className='sectionTitle'>
            <h4>{title}</h4>
        </div>
    )
}

export default SectionTitle;