import { defineStore } from "pinia";

const doll = [
	{
		type: 1,
		name: "火焰之子",
		level: "初生期"
	},
	{
		type: 2,
		name: "少年帕克",
		level: "成長期"
	},
	{
		type: 3,
		name: "少年帕歐",
		level: "成長期"
	},
	{
		type: 4,
		name: "魔騎士帕克",
		level: "成長期"
	},
	{
		type: 5,
		name: "魔導師帕歐",
		level: "成長期"
	},
	{
		type: 6,
		name: "爆擊火焰衝擊的魔騎士帕克",
		level: "育成期"
	},
	{
		type: 7,
		name: "爆擊火焰衝擊的魔導師帕歐",
		level: "育成期"
	}
];
const level = [
	{
		level: "一般",
		power: 1
	},
	{
		level: "高級",
		power: 3
	},
	{
		level: "英雄",
		power: 5
	},
	{
		level: "傳說",
		power: 7
	}
];
function FindLevel(power) {
	return level.find(function (d, i) {
		return power == d.power;
	});
}
function FindDoll(type) {
	return doll.find(function (d, i) {
		return type == d.type;
	});
}
export const mainStore = defineStore("main", {
	state: () => {
		return {
			account: "",
			invite: "",
			doll: "",
			level: "",
			point: "",
			type: 1
		};
	},
	actions: {
		init(payload) {
			this.account = payload.account;
			this.invite = payload.invite;
			this.point = payload.point;
		}
	}
});
