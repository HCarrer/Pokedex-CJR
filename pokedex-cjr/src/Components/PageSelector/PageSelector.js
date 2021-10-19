import './PageSelector.css';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';


const PageSelector = ({PageNumber, SetPageNumber}) => {

    function handleChange(event) {
        if(event.target.value >= 1 && event.target.value <= 33) {
            SetPageNumber(event.target.value)
        } else if(event.target.value < 1) {
            SetPageNumber(1)
        } else if(event.target.value > 33){
            SetPageNumber(33)
        }
        event.preventDefault()
    }

    function handleSubmit(event) {
        event.preventDefault()
    }

    function nextPage() {
        if(PageNumber === 33) {
            SetPageNumber(33)
        } else {
            SetPageNumber(PageNumber + 1)
        }
    }

    function prevPage() {
        if(PageNumber === 1) {
            SetPageNumber(1)
        } else {
            SetPageNumber(PageNumber - 1)
        }
    }

    return(
            <div className="page-selector">
                <div onClick={() => prevPage()}>
                    <BsChevronLeft className="arrow"/>
                </div>
                <input min="0" type="text" onSubmit={handleSubmit} value={PageNumber} onChange={handleChange}></input>
                <div onClick={() => nextPage()}>
                    <BsChevronRight className="arrow"/>
                </div>
            </div>
    );
}

export default PageSelector;