from django.views.generic import TemplateView

class IndexView(TemplateView):
	""" Redirige a la pagina de inicio. """
	template_name = 'index.html'