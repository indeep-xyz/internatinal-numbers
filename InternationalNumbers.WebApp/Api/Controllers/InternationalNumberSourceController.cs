using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using InternationalNumbers.WebApp.Api.Repositories.InternationalNumberSource;
using InternationalNumbers.WebApp.Api.Repositories.InternationalNumberSource.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace InternationalNumbers.WebApp.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class InternationalNumberSourceController : ControllerBase
    {
        private readonly ILogger<InternationalNumberSourceController> _logger;

        public InternationalNumberSourceController(ILogger<InternationalNumberSourceController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<InternationalNumberSourceContainer> Get()
        {
            return new InternationalNumberSourceRepository().ExtractAll();
        }
    }
}
