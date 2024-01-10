import PropTypes from 'prop-types';

export default function Welcome({ name }){
    const changeName = () => {
        name = "Guest";
        console.log(name);
    }
    return (
        <div>
            <h1>Hello,<br />
             {name}!<br /></h1>
             <button onClick={changeName}>이름 변경</button>
        </div>
    );
}

Welcome.propTypes = {
    name: PropTypes.string,
};