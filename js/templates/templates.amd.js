define(['handlebars.runtime'], function(Handlebars) {
  Handlebars = Handlebars["default"];  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['item'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function";

  return "<div class=\"o-todo-view\">\r\n    <input class=\"o-todo-toggle\" type=\"checkbox\" "
    + ((stack1 = (helpers.whether || (depth0 && depth0.whether) || alias2).call(alias1,(depth0 != null ? depth0.done : depth0),"checked=\"checked\"","",{"name":"whether","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " />\r\n    <label>"
    + ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</label>\r\n    <a class=\"o-todo-destroy\"></a>\r\n</div>\r\n<input class=\"o-todo-edit\" type=\"text\" value=\""
    + ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\"/>";
},"useData":true});
templates['stats'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing;

  return "<a id=\"clear-completed\" class=\"o-clear-completed\">Clear "
    + container.escapeExpression(((helper = (helper = helpers.done || (depth0 != null ? depth0.done : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"done","hash":{},"data":data}) : helper)))
    + " completed "
    + ((stack1 = (helpers.whether || (depth0 && depth0.whether) || alias2).call(alias1,(helpers.equal || (depth0 && depth0.equal) || alias2).call(alias1,(depth0 != null ? depth0.done : depth0),1,{"name":"equal","hash":{},"data":data}),"item","items",{"name":"whether","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</a>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing;

  return ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.done : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<div class=\"o-todo-count\"><b>"
    + container.escapeExpression(((helper = (helper = helpers.remaining || (depth0 != null ? depth0.remaining : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"remaining","hash":{},"data":data}) : helper)))
    + "</b> "
    + ((stack1 = (helpers.whether || (depth0 && depth0.whether) || alias2).call(alias1,(helpers.equal || (depth0 && depth0.equal) || alias2).call(alias1,(depth0 != null ? depth0.remaining : depth0),1,{"name":"equal","hash":{},"data":data}),"item","items",{"name":"whether","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " left</div>";
},"useData":true});
return templates;
});