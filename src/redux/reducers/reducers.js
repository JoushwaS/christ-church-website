import ActionTypes from "../constant/index";

const initial_state = {
  content: {},
  sacraments: [],
  events: [],
  event: {},
  ministeries: [],
  partners: [],
  sermons: [],
  sermon: {},
  exploreInfoList: [],
  exploreInfo: {},
  blogs: [],
  blog: {},
};

const reducers = (state = initial_state, action) => {
  switch (action.type) {
    // CATEGORIES
    case ActionTypes.GET_CONTENT:
      return {
        ...state,
        content: action.payload.data.content,
      };
    case ActionTypes.GET_EVENTS_LIST:
      return {
        ...state,
        events: action.payload.data.Events,
      };
    case ActionTypes.GET_EVENT:
      return {
        ...state,
        event: action.payload.data.event,
      };
    case ActionTypes.GET_SERMONS:
      return {
        ...state,
        sermons: action.payload.data.Sermons,
      };
    case ActionTypes.GET_SERMON:
      console.log("sermon", action.payload.data);

      return {
        ...state,
        sermon: action.payload.data.sermon,
      };

    case ActionTypes.GET_SERMONS_TYPE:
      return {
        ...state,
        sermons: action.payload.data.Sermons,
      };
    case ActionTypes.GET_SACRAMENTS:
      return {
        ...state,
        sacraments: action.payload.data.sacraments,
      };
    case ActionTypes.GET_OVERSEAPARTNERS:
      return {
        ...state,
        partners: action.payload.data.overseapartners,
      };
    case ActionTypes.GET_MINISTERIES:
      return {
        ...state,
        ministeries: action.payload.data.ministries,
      };

    case ActionTypes.GET_EVENTS_LIST:
      return {
        ...state,
        events: action.payload.data.Events,
      };
    case ActionTypes.GET_BLOGS:
      return {
        ...state,
        blogs: action.payload.data.blogs,
      };
    case ActionTypes.GET_BLOG:
      return {
        ...state,
        blog: action.payload.data.blog,
      };
    case ActionTypes.GET_EXPLORE_INFO_ALL:
      return {
        ...state,
        exploreInfoList: action.payload.data.exploreChurchInfoList,
      };
    case ActionTypes.GET_EXPLORE_INFO:
      return {
        ...state,
        exploreInfo: action.payload.data.exploreChurchInfo,
      };

    default:
      return state;
  }
};

export default reducers;
