using System.Collections.Generic;
using InternationalNumbers.WebApp.Api.Repositories.SolomonDemonSource;
using InternationalNumbers.WebApp.Api.Repositories.SolomonDemonSource.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace InternationalNumbers.WebApp.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SolomonDemonSourceController : ControllerBase
    {
        private readonly ILogger<InternationalNumberSourceController> _logger;

        public SolomonDemonSourceController(ILogger<InternationalNumberSourceController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<SolomonDemonSourceContainer> Get()
        {
            return new SolomonDemonSourceRepository().ExtractAll();
        }
    }
}
