import PropTypes from 'prop-types';

function FriendsMenu({ friend }) {
  return (
    <>
      <h2>Workers</h2>
      <h3>
        Please lift up {friend}.
      </h3>
      <p>
        O God, you desire that all people be saved and come to knowledge of the
        truth: Prosper all those who live, preach, and teach the Gospel at home
        and in distant lands [especially __________]; protect them in all
        perils, support them in their loneliness, sustain them in the hour of
        trial; give them your abundant grace to bear faithful witness; and endue
        them with burning zeal and love, that they may turn many to
        righteousness; through Jesus Christ our Lord. <strong>Amen.</strong>
      </p>
    </>
  );
}

FriendsMenu.propTypes = {
  friend: PropTypes.string,
};

export default FriendsMenu;
