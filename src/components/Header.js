import Navigation from './Navigation'

const Header = ({title}) => {
  return (
    <header className='flex-row'>
        {title}
        <Navigation />
    </header>
  )
}

Header.defaultProps = {
    title: 'something_skincare'
}

export default Header