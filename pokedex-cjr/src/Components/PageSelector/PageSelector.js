import './PageSelector.css';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import PageContext from '../Context/PageContext'
import { useContext} from 'react';


const PageSelector = () => {

    const {pageNumber, setPageNumber} = useContext(PageContext)


    function handleChange(event) {
        if(event.target.value >= 1 && event.target.value <= 33) {
            setPageNumber(event.target.value)
        } else if(event.target.value < 1) {
            setPageNumber(1)
        } else if(event.target.value > 33){
            setPageNumber(33)
        }
        event.preventDefault()
    }

    function handleSubmit(event) {
        event.preventDefault()
    }

    function nextPage() {
        if(pageNumber === 33) {
            setPageNumber(33)
        } else {
            setPageNumber(pageNumber + 1)
            console.log(pageNumber)
        }
    }

    function prevPage() {
        if(pageNumber === 1) {
            setPageNumber(1)
        } else {
            setPageNumber(pageNumber - 1)
        }
    }

    return(
            <div className="page-selector">
                <div onClick={() => prevPage()}>
                    <BsChevronLeft className="arrow"/>
                </div>
                <input min="0" type="text" onSubmit={handleSubmit} value={pageNumber} onChange={handleChange}></input>
                <div onClick={() => nextPage()}>
                    <BsChevronRight className="arrow"/>
                </div>
            </div>
    );
}

export default PageSelector;