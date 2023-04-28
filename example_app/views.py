from inertia import render


# Create your views here.

def example_view(request):
    return render(request, "Example", props={"inertia": True})
