import { connect } from 'react-redux';
import { getUserName } from '../redux/auth/auth-selectors';
import { logOut } from '../redux/auth/auth-operations';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRihgt: 4,
  },
  name: {
    fontWeight: 700,
    marginRihgt: 17,
  },
};

const UserMenu = ({ avatar, name, onLogout }) => (
  <div style={styles.container}>
    <span style={styles.name}>Welcome {name}</span>
    <button type="button" onClick={onLogout}>
      LogOut
    </button>
  </div>
);

const mapStateToProps = state => ({
  name: getUserName(state),
});

const mapDispatchToProps = {
  onLogout: logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
