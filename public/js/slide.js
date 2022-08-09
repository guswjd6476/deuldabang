//FaQ 
$(".open").click(function() {
    var container = $(this).parents(".topic");
    var answer = container.find(".answer");
    var trigger = container.find(".faq-t");
  
  
  if (trigger.hasClass("faq-o")) {
    trigger.removeClass("faq-o");
  }
  else {
    trigger.addClass("faq-o");
  }
  
  
 
  });
  
  jQuery(document).ready(function($) {
    $('.question').each(function() {
      $(this).attr('data-search-term', $(this).text().toLowerCase() + $(this).find("ptag").text().toLowerCase());
  
    });
  
    $('.live-search-box').on('keyup', function() {
  
      var searchTerm = $(this).val().toLowerCase();
  
      $('.question').each(function() {
  
        if ($(this).filter('[data-search-term *= ' + searchTerm + ']').length > 0 || searchTerm.length < 1) {
          $(this).parent().parent().show();
        } else {
          $(this).parent().parent().hide();
        }
  
      });
  
    });
  
  });

$(function() {
  var Accordion = function(el, multiple) {
      this.el = el || {};
      this.multiple = multiple || false;

      var links = this.el.find('.article-title');
      links.on('click', {
          el: this.el,
          multiple: this.multiple
      }, this.dropdown)
  }

  Accordion.prototype.dropdown = function(e) {
      var $el = e.data.el;
      $this = $(this),
          $next = $this.next();

      $next.slideToggle();
      $this.parent().toggleClass('open');

      if (!e.data.multiple) {
          $el.find('.accordion-content').not($next).slideUp().parent().removeClass('open');
      };
  }
  var accordion = new Accordion($('.accordion-container'), false);
});