import mainHtml from './main.tpl.html';
import Tool from '../utils/tool';
import Xhr from '../utils/xhr';

export default {
    init() {
        this.getList();
        this.loadMore();
        this.topSoll();
    },
    getList() {
//      $.ajax({
//          url: 'https://cnodejs.org/api/v1/topics/?page=1&tab=all&limit=10',
//          type: 'get',
//          dataType: 'json',
//          contentType: 'application/json',
//          success: function(data) {
//              var topicsTpl = Template7.compile(mainHtml)(data);
//              $('.media-list ul').html('').append($(topicsTpl));
//          },
//          error: function() {
//              console.log('error---');
//          }
//      });

        
        
        
        this.getTopics(1, function(res){
            var topicsTpl = Tool.renderTpl(mainHtml, res);
            $('.media-list ul').html('').append($(topicsTpl));
        });
        
    },
    getTopics(page, callback){
        var params = {
            page: page,
            tab: 'all',
            success: success,
            error: error
        }, that = this;
        function success(res){
            console.log(res);
            callback && callback(res);
        };
        function error(err){
            console.log(err);
        }
        Xhr.getTopics(params);
    },
    loadMore(){
        var loading = false,
            that = this,
            page = 2;
        $('.infinite-scroll').on('infinite', function () {
            if (loading) return;
            loading = true;
            $.ajax({
                url: 'https://cnodejs.org/api/v1/topics/?page='+page+'&tab=all&limit=10',
                type: 'get',
                dataType: 'json',
                contentType: 'application/json',
                success: function(data) {
                    ++page;
                    var topicsTpl = Template7.compile(mainHtml)(data);
                    $('.media-list ul').append($(topicsTpl));
                    loading = false;
                },
                error: function() {
                    console.log('error---');
                }
            });
            
            
        })
    },
    topSoll(){
        
        $('.pull-to-refresh-content').on('refresh', function(e){
            $.ajax({
                url: 'https://cnodejs.org/api/v1/topics/?page=1&tab=all&limit=10',
                type: 'get',
                dataType: 'json',
                contentType: 'application/json',
                success: function(data) {
                    var topicsTpl = Template7.compile(mainHtml)(data);
                    $('.media-list ul').html('').append($(topicsTpl));
                    myApp.pullToRefreshDone();
                },
                error: function() {
                    console.log('error---');
                }
            });
        })
               
        
    }
};
















