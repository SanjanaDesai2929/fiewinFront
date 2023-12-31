import { combineReducers } from "redux";
import {  AddAccountReducer,UserReducer, LoginReducer, RechargeAmountReducer,WithdrawAccountDataCancelReducer, RechargeScreenShotReducer, RechargeStatusReducer, RechargeTransactionReducer, RechargeTransferredReducer, RechargeUserTransactionReducer, RegisterReducer, UserAccountDeleteReducer, UserAccountReducer, WalletAmountReducer, WithdrawAccountDataReducer, WithdrawAccountReducer, TaskRewardReducer, TaskStatusRewardReducer, CheckInRewardReducer, CheckInPostRewardReducer, CheckInBonusRewardReducer, MyProfileReducer, MyProfileUpdateReducer, ParityOrderReducer, FinancialReducer, InviteReducer, IncomeDetailsReducer, InviteLinkReducer, InvitePeopleReducer, InvitePeopleMobileReducer, LuckyrupessReducer, MinesweeperReducer, MinesweeperGetReducer, IncomeGetReducer, RechargesReducer, RankingReducer, CompaintReducer, GrowthReducer, GrowthPlanReducer, MoreParitynReducer, ProbablityReducer } from "./reducer/FetchReducer"

const rootReducer = combineReducers({
  register:RegisterReducer,
  login:LoginReducer,
  walletAmount:WalletAmountReducer,
  recharge:RechargeAmountReducer,
  rechargeTrans:RechargeTransferredReducer,
  RechargeSs:RechargeScreenShotReducer,
  RechargeStatus:RechargeStatusReducer,
  transaction:RechargeTransactionReducer,
  userTransaction:RechargeUserTransactionReducer,
  addAccount:AddAccountReducer,
  userAcc:UserAccountReducer,
  delteAccount:UserAccountDeleteReducer,
  withdraw:WithdrawAccountReducer,
  withdrawData:WithdrawAccountDataReducer,
  cancelWithdraw:WithdrawAccountDataCancelReducer,
  taskReward:TaskRewardReducer,
  taskStatus:TaskStatusRewardReducer,
  checkIn:CheckInRewardReducer,
  checkInPost:CheckInPostRewardReducer,
  bonusCheck: CheckInBonusRewardReducer,
  myProfile:MyProfileReducer,
  updateProfile:MyProfileUpdateReducer,
  ParityData:ParityOrderReducer,
  financial:FinancialReducer,
  invite:InviteReducer,
  income:IncomeDetailsReducer,
  invitelink:InviteLinkReducer,
  invitepeople:InvitePeopleReducer,
  invitemobile:InvitePeopleMobileReducer,
  luckyrupess: LuckyrupessReducer,
  mine:MinesweeperReducer,
  getMine:MinesweeperGetReducer,
  incomeGet:IncomeGetReducer,
  rechargesuccess:RechargesReducer,
  Ranking:RankingReducer,
  complaint:CompaintReducer,
  growthplan:GrowthReducer,
  growthstatus:GrowthPlanReducer,
  more:MoreParitynReducer,
  probality:ProbablityReducer,
  userorder:UserReducer

})
export default rootReducer;