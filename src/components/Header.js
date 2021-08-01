import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { Link } from "react-router-dom";
import logo from '../assets/img/logo.png';
import styles from '../assets/scss/Header.module.scss';
import Select from './Select';
import * as LanguageActions from '../redux/actions/languages';


const Header = (props) => {
    const { getLanguage, languages, language, label } = props;

    const handleChange = React.useCallback((event) => {
        const selectedIndex = event.target.selectedIndex;
        const selectedValue = event.target.options[selectedIndex].value;
        getLanguage(selectedValue)
    }, []);

    return (
        <header className={styles.header}>
            <Link to={`/`}>
                <img className={styles.logo} src={logo} alt="logo" />
            </Link>
            <Select onChange={handleChange} items={languages[language]} label={label[language].language} />
        </header>
    )
}
const mapStateToProps = state => ({
    languages: state.languages.languages,
    language: state.languages.language,
    label: state.languages.label
})

const mapDispatchToProps = dispatch => bindActionCreators({
    ...LanguageActions
}, dispatch)

Header.propTypes = {
    props: PropTypes.object
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
