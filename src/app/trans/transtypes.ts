export interface IObjectKeys {
  [key: string]: any;
}
export interface CommonType {
  main_subtit: string;
  main_introduce: string;
  login: string;
  sign_in_required: string;
  signin: string;
  signin_to_your_account: string;
  skip: string;
  skip_detail: string;
  email: string;
  email_input: string;
  password_input: string;
  password_verify: string;
  confirm: string;
  reset_password: string;
  resend_code: string;
  verify_code_page: string;
  enter_verify_code: string;
  forgot_password: string;
  recover_your_account: string;
  change_password: string;
  change_password_your_account: string;
  re_password_input: string;
  no_account: string;
  create_one: string;
  episodes: string;
  episodesTitle: string;
  season: string;
  all: string;
  description: string;
  vote: string;
  cast: string;
  storyline: string;
  detail: string;
  details: string;
  crew: string;
  director: string;
  writer: string;
  like: string;
  save: string;
  saved: string;
  share: string;
  streaming: string;
  crowdfunding: string;
  events: string;
  apply: string;
  blog: string;
  store: string;
  home: string;
  login_is_required: string;
  participants: string;
  vote2: string;
  writeAComment: string;
  comment: string;
  refresh: string;
  popular: string;
  latest: string;
  round: string;
  my_page: string;
  sign_out: string;
  sign_out_question1: string;
  sign_out_question2: string;
  sign_up: string;
  userEmail: string;
  apply_title: string;
  apply_title2: string;
  apply_sub: string;
  apply_sub2: string;
  personal_company_name: string;
  personal_company_name_plh: string;
  mobile_number: string;
  project_plh: string;
  project_details_plh: string;
  estimated_cost: string;
  estimated_cost_plh: string;
  production_schedule: string;
  production_schedule_plh: string;
  additional_information: string;
  additional_information_plh: string;
  popular_search_keyword: string;
  create_a_new_account: string;
  accept_the_terms_of_use: string;
  privacy_policy: string;
  next: string;
  search: string;
  birth_date: string;
  basic_information: string;
  enjoy_a_variety_of_videos: string;
  name: string;
  nationality: string;
  registration_complete: string;
  modifications_completed: string;
  to_do_next: string;
  edit_profile: string;
  enter_the_verification_code: string;
  email_authentication: string;
  please_enter_your_email: string;
  survey: string;
  gender: string;
  notice: string;
  proceeding: string;
  cancel: string;
  end: string;
  lookup: string;
  listView: string;
  basic_information2: string;
  surveySub1: string;
  surveySub2: string;
  allStreaming: string;
  allCapital: string;
  webDrama: string;
  shortMovies: string;
  shortMovie: string;
  musicVideos: string;
  musicVideo: string;
  all2: string;
  recent: string;
  select: string;
  byGenre: string;
  bookmark: string;
  voted: string;
  editProfile: string;
  do_you_want_login: string;
  finished: string;
  ongoing: string;
  myVote: string;
  likedList: string;
  bookmarkList: string;
  loading: string;
  cancelLiked: string;
  application_complete: string;
  application_sub_1: string;
  application_sub_2: string;
  play: string;
  firstComment: string;
  haveNoData: string;
  haveNoVote: string;
  noInformation: string;
  period: string;
  newPassword: string;
  loginSuccess: string;
  backers: string;
  updatedAt: string;
  agree: string;
  text_and_number_only: string;
}

export interface DefaultValueType extends IObjectKeys {
  facebook: string;
  instargram: string;
  google: string;
  otherInletChannel: string;
  choose_your_gender: string;
  male: string;
  female: string;
  unchecked: string;
  private: string;
}
export interface ErrorMessageType extends IObjectKeys {
  er_login: string;
  userPassword: string;
  userPassword_confirmation: string;
  er_email_to_retrieve_code: string;
  er_change_password: string;
  er_enter_code: string;
  please_choose: string;
  voting_failed: string;
  comment_failed: string;
  validate_required: string;
  validate_input_not_valid: string;
  validate_field_mlte: string;
  validate_password: string;
  validate_password_not_match: string;
  validate_min: string;
  unauthentication: string;
}

export interface KeyValueType extends IObjectKeys {
  user_id: string;
  userPassword: string;
  confirmPassword: string;
  name: string;
  userEmail: string;
  email: string;
  email_tax: string;
  certificationNumber: string;
  phone: string;
  address: string;
  codeOTP: string;
  title: string;
  content: string;
  userName: string;
}

export interface KeyValueApplyType extends IObjectKeys {
  apply_company_name: string;
  apply_project_name: string;
  apply_type_video: string;
  apply_type_video_1: string;
  apply_type_video_2: string;
  apply_type_video_3: string;
  apply_project_content: string;
  apply_email: string;
  apply_phone: string;
  apply_budget: string;
  apply_how_long: string;
  apply_link: string;
  apply_expect_benefit: string;
  apply_expect_benefit_1: string;
  apply_expect_benefit_2: string;
  apply_expect_benefit_3: string;
  apply_expect_benefit_4: string;
  apply_extra_information: string;
}

export interface trans {
  common: CommonType;
  defaultKeyValue: DefaultValueType;
  errorMessage: ErrorMessageType;
  keyValue: KeyValueType;
  applyPage: KeyValueApplyType;
}
