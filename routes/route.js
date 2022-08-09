var express = require('express');
var expressLayouts = require('express-ejs-layouts');
var route = express.Router();

const {check, validationResult} = require('express-validator');

// const db = require('./../db.js');

route.use(expressLayouts);
//route 라우트
route.get('/', (req, res) => {
    res.render('./main');
})

route.get('/shop', (req, res) => {
    res.render('./sub/shop');
})
route.get('/shop_nodle', (req, res) => {
    res.render('./sub/shop_nodle');
})
route.get('/shop_deul', (req, res) => {
    res.render('./sub/shop_deul');
})
route.get('/shop_mask', (req, res) => {
    res.render('./sub/shop_mask');
})
route.get('/shop_surport', (req, res) => {
    res.render('./sub/shop_surport');
})

// route.get('/shop_page', (req, res) => {
//     let id = req.query.id;
//     db.getMemoById(id,(row)=>{
//         if(typeof id == 'undefined' || row.length <= 0){
//             res.status(404).json({error:'undefined memo'})

//         }else{
//             res.render('./sub/shop_page',{row:row[0]})
//         }
//     })
// })

route.get('/intro', (req, res) => {
    res.render('./sub/intro');
})
route.get('/intro_coffee', (req, res) => {
    res.render('./sub/intro_coffee');
})
route.get('/intro_food', (req, res) => {
    res.render('./sub/intro_food');
})
route.get('/intro_come', (req, res) => {
    res.render('./sub/intro_come');
})
route.get('/news', (req, res) => {
    res.render('./sub/news');
})
route.get('/qna', (req, res) => {
    res.render('./sub/qna');
})
route.get('/qna_q', (req, res) => {
    res.render('./sub/qna_q');
})

// route.get('/shop_wrtie',(req,res) => {
//     res.render('./sub/shop_write')
// })




route.post('/store', check('content').isByteLength({min : 1, max : 65535}),check('title').isByteLength({min : 1, max : 300}),
    function(req,res, next){
        let errs = validationResult(req);
        console.log(errs)
        if(errs['errors'].length>0){
            res.render('/notice',{errs:errs['errors']});
        }else{
            let param = JSON.parse(JSON.stringify(req.body));
            db.insertMemo(param['content'],param['title'],param['writer'], ()=>{
                res.redirect('/notice');
            })
        }
    });

route.get('/updateMemo',(req,res) => {
    let id = req.query.id;

    db.getMemoById(id,(row)=>{
        if(typeof id == 'undefined' || row.length <= 0){
            res.status(404).json({error:'undefind memo'})

        }else{
            res.render('./sub/updateMemo',{row:row[0]})
        }
    })
})

route.post('/updateMemo',[check('content').isByteLength({min : 1, max : 65535})],
(req,res)=>{
    let errs = validationResult(req);
    let param = JSON.parse(JSON.stringify(req.body));
    let id = param['id'];
    let content = param['content'];
    let title = param['title'];
    let writer = param['writer'];
    if(errs['errors'].length>0){
        db.getMemoById(id,(row)=>{
            res.render('updateMemo',{row:row[0],errs:errs['errors']})
        })
    }else{
        db.updateMemoById(id, content,title,writer,()=>{
            res.redirect('shop');
        })
    }
})

route.get('/deleteMemo',(req,res)=>{
    let id = req.query.id;
    db.deleteMemoById(id,()=>{
        res.redirect('shop');
    });
});




module.exports = route;