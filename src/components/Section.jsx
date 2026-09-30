import PropTypes from 'prop-types';

export default function Section({ children, title }) {
    console.log(children);
    console.log(title);
    return (
    <section>
        {/* <h1>{title}</h1> */}
        {title ? <h1>{title}</h1> : <h1>No title</h1>}
        {/* {isOnline && "ONline"} */}
        {children}
    </section>
    )
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
