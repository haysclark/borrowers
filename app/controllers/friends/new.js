import FriendsBaseController from './base';

export default FriendsBaseController.extend({
	actions: { 
		cancel: function() {
			this.transitionToRoute('friends.index');
			
			// don't bubble
			return false; 
		}
	}
});
