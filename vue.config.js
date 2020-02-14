//模拟数据
const express = require('express')
const app = express()
//推荐数据
var recommendList = require('./src/data/recommend.json')
//关注数据
var followList = require('./src/data/follow.json')
//各类热榜数据
var totalList = require('./src/data/total.json')
var digitalList = require('./src/data/digital.json')
var filmList = require('./src/data/film.json')
var scienceList = require('./src/data/science.json')
var sportList = require('./src/data/sport.json')
var carList = require('./src/data/car.json')
var fashionList = require('./src/data/fashion.json')
var schoolList = require('./src/data/school.json')
//各类问题数据
var hotList = require('./src/data/question-hot.json')
var potentialList = require('./src/data/question-qianli.json')
var newList = require('./src/data/question-newest.json')
var peopleList = require('./src/data/question-easy.json')
//API路径
var apiRoutes = express.Router()
app.use('/api', apiRoutes)

module.exports = {
	devServer: {
		host: "localhost",
		port: 9090,
		https: false,
		open: true,
		hotOnly: true,
		before(app) {
			app.get('/api/recommend', (req, res) => {
				res.json({
					code: 1,
					msg: '成功',
					data: recommendList
				})
			})
			app.get('/api/follow', (req, res) => {
				res.json({
					code: 1,
					msg: '成功',
					data: followList
				})
			})
			app.get('/api/hot-lists/total', (req, res) => {
				res.json({
					code: 1,
					msg: '成功',
					data: totalList
				})
			})
			app.get('/api/hot-lists/digital', (req, res) => {
				res.json({
					code: 1,
					msg: '成功',
					data: digitalList
				})
			})
			app.get('/api/hot-lists/film', (req, res) => {
				res.json({
					code: 1,
					msg: '成功',
					data: filmList
				})
			})
			app.get('/api/hot-lists/science', (req, res) => {
				res.json({
					code: 1,
					msg: '成功',
					data: scienceList
				})
			})
			app.get('/api/hot-lists/sport', (req, res) => {
				res.json({
					code: 1,
					msg: '成功',
					data: sportList
				})
			})
			app.get('/api/hot-lists/car', (req, res) => {
				res.json({
					code: 1,
					msg: '成功',
					data: carList
				})
			})
			app.get('/api/hot-lists/fashion', (req, res) => {
				res.json({
					code: 1,
					msg: '成功',
					data: fashionList
				})
			})
			app.get('/api/hot-lists/school', (req, res) => {
				res.json({
					code: 1,
					msg: '成功',
					data: schoolList
				})
			})
			app.get('/api/question/waiting/hot', (req, res) => {
				res.json({
					code: 1,
					msg: '成功',
					data: hotList
				})
			})
			app.get('/api/question/waiting/potential', (req, res) => {
				res.json({
					code: 1,
					msg: '成功',
					data: potentialList
				})
			})
			app.get('/api/question/waiting/new', (req, res) => {
				res.json({
					code: 1,
					msg: '成功',
					data: newList
				})
			})
			app.get('/api/question/waiting/people', (req, res) => {
				res.json({
					code: 1,
					msg: '成功',
					data: peopleList
				})
			})
		}
	}
};