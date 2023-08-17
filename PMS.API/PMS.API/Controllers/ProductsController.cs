using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PMS.API.Data;
using PMS.API.Models;

namespace PMS.API.Controllers
{
    [ApiController]
    [Route("/api/[controller]")]
    public class ProductsController : Controller
    {
        private readonly PMSDbContext _pmscontext;
        public ProductsController(PMSDbContext pmsdbcontext)
        {
            this._pmscontext = pmsdbcontext;
        }
        [HttpGet]
        public async Task<IActionResult> GetAllProducts()
        {
            var products = await _pmscontext.Products.ToListAsync();
            return Ok(products);
            // return View();
        }

        [HttpPost]
        public async Task<IActionResult> AddProduct([FromBody] Product product)
        {
            product.Id = Guid.NewGuid();
            await _pmscontext.Products.AddAsync(product);
            await _pmscontext.SaveChangesAsync();
            return Ok(product);
        }

        [HttpGet]
        [Route("{id:Guid}")]
        public async Task<IActionResult> getProdcut(Guid id)
        {
            var prodcuts = await _pmscontext.Products.FirstOrDefaultAsync(x => x.Id == id);
            if (prodcuts == null)
                return NotFound();

            return Ok(prodcuts);
        }

        [HttpPut]
        [Route("{id:Guid}")]
        public async Task<IActionResult> updateProduct([FromRoute] Guid id,Product upateProductObj)
        {
            var prodcut = await _pmscontext.Products.FindAsync(id);
            if(prodcut == null)           
                return NotFound();
            
           prodcut.Name= upateProductObj.Name;
            prodcut.Type = upateProductObj.Type;
            prodcut.Color=upateProductObj.Color;
            prodcut.Price = upateProductObj.Price;
            await _pmscontext.SaveChangesAsync();


            return Ok(prodcut);
        }
        [HttpDelete]
        [Route("{id:Guid}")]
        public async Task<IActionResult> delteProduct(Guid id)
        {
            var product = await _pmscontext.Products.FindAsync(id);
            if(product == null)
                return NotFound();
            _pmscontext.Products.Remove(product);
            await _pmscontext.SaveChangesAsync();

            return Ok(product); 

            
        }

    }
}
