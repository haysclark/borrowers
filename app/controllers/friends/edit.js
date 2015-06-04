import FriendsBaseController from './base';

export default FriendsBaseController.extend({
	actions: { 
		cancel: function() {
			this.transitionToRoute('friends.show', this.get('model'));

			// don't bubble
			return false; 
		}
	}
});