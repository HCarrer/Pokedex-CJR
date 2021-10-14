import './HomePage.css';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import Card from '../Card/Card';

const HomePage = () => {
    return(
        <div>
            <div className="cards-container">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
            <div className="page-selector">
                <BsChevronLeft className="arrow"/>
                <span className="page-number">1</span>
                <BsChevronRight className="arrow"/>
            </div>
        </div>
    );
}

export default HomePage;