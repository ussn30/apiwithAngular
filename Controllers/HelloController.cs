using System;
using Microsoft.AspNetCore.Mvc;

namespace hello_world.Controllers
{
    [Route("api/[Controller]")]
    public class HelloController : ControllerBase
    {
        [HttpGet]
        public IActionResult Greetings() {
            return Ok("Hello from jsdfmdsm.NET Core Web API.");
        }
    }
}