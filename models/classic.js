import {HTTP} from "../utils/http.js"
class ClassicModel extends HTTP{
	getLatest(callback){
		this.request({
			url:"classic/latest",
			success:(res)=> {
				callback(res)
				this.setLatestIndex(res.index)
			}
		})
	};
	onPrevious(index,callback){
		this.request({
			url:"classic/"+index+"/previous",
			success:(res) => {
				callback(res);
				
			}
		})
	};
	isFirst(index){
		return index==1?true:false
	}
	isLatest(index){
		let latestIndex=this.getLatestIndex()
		return latestIndex==index?true:false
	}
	getLatestIndex(){
		let index=wx.getStorageSync("latest");
		return index 
	}
	setLatestIndex(index){
		wx.setStorageSync("latest",index)
	}
}
export {ClassicModel}