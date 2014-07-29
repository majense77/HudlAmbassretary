using System.Web.Mvc;
using AttributeRouting;
using WebApp.Models.Base.SilverPlus;
using WebCore.WebBase.NewBase;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.Net;
using System.IO;
using System.Net.Http;
using System;
namespace WebApp.Areas.Secretary.Controllers
{
    public class SecretaryController : HudlBaseController
    {
        Uri messageUri = new Uri("https://api.hipchat.com/v2/room/Hipchat API Testing/notification");
        [GET("secretary")]
        public ActionResult Index()
        {
            var model = new SilverPlusPageBase
            {
                HideMainNavigation = true
            };

            return View("~/Areas/Secretary/Views/Index.cshtml", model);
        }
        
        public void DeliveryMessage()
        {
            var message = new Secretary.Resources.SecretaryMessage();
            var jsonMessage = JsonConvert.SerializeObject(message);
            var request = new HttpRequestMessage() { Content = new StringContent(jsonMessage), Method = HttpMethod.Post };
            HttpClient client = new HttpClient() { BaseAddress =  messageUri};
                client.SendAsync(request);
        }
    }
}