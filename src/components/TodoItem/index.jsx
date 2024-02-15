import './index.css';
import trash from '../../assets/Vector.svg'

 function TodoItem(props) {

   const (name)=props.todo; 
  return (
    <div className='item-wrapper'>
        <div className='check'>
            <input type='checkbox' name='' id=''/>
            <p>{name}</p>
        </div>

        <img className='trash-icon' src={trash} alt='trash icon'/>
    </div>
  )
}


export default TodoItem