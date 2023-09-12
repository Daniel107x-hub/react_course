import useNavigation from '../hooks/use-navigation';
import classNames from 'classnames';

function Link({ to, children, className, activeClassName }) {
  const { navigate, currentPath } = useNavigation();
  const classes = classNames('text-blue-500 hover:underline', className, currentPath === to && activeClassName)
  const handleClick = (e) => {
    if(e.metaKey || e.ctrlKey) return; // If metakey or ctrl pressed, the browser follows the default functionality
    e.preventDefault(); //Stop default link functionality if user is not holding ctrl key
    navigate(to);
  };
  return (
    <a href={to} onClick={handleClick} className={classes}>
      {children}
    </a>
  );
}

export default Link;
