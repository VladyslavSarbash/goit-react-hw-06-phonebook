import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteAction } from '../Redux/action';

function RenderContactList({ contacts, deleteContact }) {
  return (
    <div>
      <ul>
        {contacts.length === 0 ? (
          <h2>No contacts</h2>
        ) : (
          contacts.map(({ id, name, number }) => {
            return (
              <li key={id}>
                {name}: {number}
                <button
                  className="item-list"
                  id={id}
                  type="button"
                  onClick={() => deleteContact(id)}
                >
                  Delete
                </button>
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
}

const filterContacts = (contacts, filter) => {
  return contacts.filter(({ name }) => {
    const lowerValue = filter.toLowerCase();
    return name.toLowerCase().includes(lowerValue);
  });
};

const stateProp = ({ contacts, filter }) => ({
  contacts: filterContacts(contacts, filter),
  filter,
});

const deleteDispatch = dispatch => ({
  deleteContact: id => dispatch(deleteAction(id)),
});

export default connect(stateProp, deleteDispatch)(RenderContactList);

RenderContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  filter: PropTypes.string,
};
