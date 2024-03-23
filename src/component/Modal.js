
const Modal = ({children}) => {
    return(
        <div className="flex justify-center items-center fixed top-0 left-0 right-0 bottom-0 bg-[#00000099] rounded-lg z-20">
            {children}
        </div>
    );
}
export default Modal;