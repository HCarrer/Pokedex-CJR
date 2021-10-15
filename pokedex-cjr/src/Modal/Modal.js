import OutsideClickHandler from 'react-outside-click-handler';
    
const BACKGROUND = {
    position: 'fixed',
    height: '100vh',
    width: '100vw',
    top: '0px',
    left: '0px',
    backgroundColor: 'black',
    opacity: '0.5',
    zIndex: '100'
}

export default function Modal({children, show, onClose}) {
    if(!show) {
        return null
    }

    return (
        <div>
            <OutsideClickHandler onOutsideClick={onClose}>
                {children}
            </OutsideClickHandler>
            <div style={BACKGROUND}></div>
        </div>
    )
}
