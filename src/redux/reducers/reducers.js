import ActionTypes from "../constant/index";

const initial_state = {
  content: {},
  sacraments: [],
  events: [],
  event: {},
  ministeries: [],
  ministry: {},
  partners: [],
  partner: {},
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
    case ActionTypes.UPDATE_CONTENT:
      return {
        ...state,
      };
    case ActionTypes.CREATE_CONTENT:
      return {
        ...state,
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

    case ActionTypes.UPDATE_EVENT:
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
      // console.log("sermon", action.payload.data);

      return {
        ...state,
        sermon: action.payload.data.sermon,
      };
    case ActionTypes.UPDATE_SERMON:
      // console.log("sermon", action.payload.data);

      return {
        ...state,
        sermon: action.payload.data.sermon,
      };
    case ActionTypes.CREATE_SERMON:
      console.log("sermon", action.payload.data);

      return {
        ...state,
        // sermon: action.payload.data.sermon,
      };
    case ActionTypes.CREATE_BLOGS:
      console.log("blog", action.payload.data);

      return {
        ...state,
        // sermon: action.payload.data.sermon,
      };
    case ActionTypes.DELETE_BLOG:
      console.log("blog", action.payload.data);

      return {
        ...state,
        // sermon: action.payload.data.sermon,
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
    case ActionTypes.GET_OVERSEAPARTNER:
      return {
        ...state,
        partner: action.payload.data.overseapartner,
      };
    case ActionTypes.UPDATE_OVERSEAPARTNER:
      return {
        ...state,
        partner: action.payload.data.overseapartner,
      };
    case ActionTypes.CREATE_OVERSEAPARTNER:
      return {
        ...state,
        // partner: action.payload.data.overseapartner,
      };
    case ActionTypes.DELETE_OVERSEAPARTNER:
      return {
        ...state,
        // partner: action.payload.data.overseapartner,
      };

    case ActionTypes.GET_MINISTERIES:
      return {
        ...state,
        ministeries: action.payload.data.ministries,
      };
    case ActionTypes.GET_MINISTERY:
      return {
        ...state,
        ministry: action.payload.data.ministry,
      };
    case ActionTypes.UPDATE_MINISTRY:
      return {
        ...state,
        ministry: action.payload.data.ministry,
      };
    case ActionTypes.DELETE_MINISTRY:
      console.log("ministry delete reducer", action.payload.data);

      return {
        ...state,
      };

    case ActionTypes.CREATE_MINISTERIES:
      console.log("ministry create reducer", action.payload.data);

      return {
        ...state,
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
