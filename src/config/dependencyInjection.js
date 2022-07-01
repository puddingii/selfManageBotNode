import { createContainer, asValue } from 'awilix';
import AccountBook from '../models/AccountBook';
import User from '../models/User';
// import Study from '../models/Study';
// import Channel from '../models/Channel';
// import Todo from '../models/Todo';
// import ChannelUserGoal from '../models/ChannelUserGoal';

const container = createContainer();

container.register({
	AccountBookModel: asValue(AccountBook),
	UserModel: asValue(User),
	// StudyModel: asValue(Study),
	// ChannelModel: asValue(Channel),
	// TodoModel: asValue(Todo),
	// ChannelUserGoalModel: asValue(ChannelUserGoal),
});

export default container;
