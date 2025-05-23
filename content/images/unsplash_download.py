import requests
import os

# Set your Unsplash API Access Key here
UNSPLASH_ACCESS_KEY = 'cWIXzHZ4X_oaG2N0KtRlKb2HLN0WSCLrZJLjYbwEdjc'

# List of (search_query, filename) pairs for each blog post hero image
images = [
    ("flood risk policy future regulation", "future-flood-policy-hero.jpg"),
    ("biodiversity net gain nature water", "bng-integrated-solutions-hero.jpg"),
    ("environmental permit industry", "environmental-permit-fra-hero.jpg"),
    ("renewable energy solar wind battery", "renewable-energy-fra-hero.jpg"),
    ("functional floodplain flood zone", "functional-floodplain-hero.jpg"),
    ("small development home extension flood", "small-developments-fra-hero.jpg"),
    ("property flood resilience retrofit", "retrofitting-flood-protection-hero.jpg"),
    ("sequential exception test flood planning", "sequential-exception-tests-hero.jpg"),
    ("critical drainage area urban flood", "critical-drainage-areas-hero.jpg"),
]

headers = {
    "Accept-Version": "v1",
    "Authorization": f"Client-ID {UNSPLASH_ACCESS_KEY}"
}

for query, filename in images:
    print(f"Searching Unsplash for: {query}")
    params = {
        "query": query,
        "orientation": "landscape"
    }
    response = requests.get("https://api.unsplash.com/photos/random", headers=headers, params=params)
    if response.status_code == 200:
        data = response.json()
        image_url = data['urls']['regular']
        author = data['user']['name']
        author_url = data['user']['links']['html']
        unsplash_url = data['links']['html']
        print(f"Downloading {filename} from {image_url}")
        img_data = requests.get(image_url).content
        with open(filename, 'wb') as handler:
            handler.write(img_data)
        print(f"Saved as {filename}. Photo by {author} ({author_url}) on Unsplash: {unsplash_url}\n")
    else:
        print(f"Failed to fetch image for '{query}'. Status code: {response.status_code}\n")

print("Done. Please add your Unsplash API access key to the script before running.") 