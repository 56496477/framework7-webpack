import detailHtml from './detail.tpl.html';
import loading from '../components/loading.js';

export default {
    init(page) {
            var id = page.query.id;
            this.findListId(id);
        },
        findListId(id) {
            loading.show();
            $.ajax({
                url: 'https://cnodejs.org/api/v1/topic/' + id,
                type: 'get',
                dataType: 'json',
                contentType: 'application/json',
                success: function(data) {
                    
                    loading.backCall(function(){
                        loading.hide();

                        var detTpl = Template7.compile(detailHtml)(data.data);
                    
                        $('.detail-page').html('').append($(detTpl));
                    });
                    
                },
                error: function() {
                    console.log('error');
                }
            });
            
            
            
    
        }
}