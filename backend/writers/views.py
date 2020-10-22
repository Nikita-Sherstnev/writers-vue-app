from django.shortcuts import render

from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework import status

from writers.models import Writer
from writers.serializers import WriterSerializer
from rest_framework.decorators import api_view


@api_view(['GET', 'POST', 'DELETE'])
def writer_list(request):
    if request.method == 'GET':
        writers = Writer.objects.all()

        # title = request.GET.get('title', None)
        # if title is not None:
        #     writers = writers.filter(title__icontains=title)

        writers_serializer = WriterSerializer(writers, many=True)
        return JsonResponse(writers_serializer.data, safe=False)
        # 'safe=False' for objects serialization

    elif request.method == 'POST':
        writer_data = JSONParser().parse(request)
        writer_serializer = WriterSerializer(data=writer_data)
        if writer_serializer.is_valid():
            writer_serializer.save()
            return JsonResponse(writer_serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(writer_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        count = Writer.objects.all().delete()
        return JsonResponse({'message': '{} писателей было удалено'.format(count[0])}, status=status.HTTP_204_NO_CONTENT)


@api_view(['GET', 'PUT', 'DELETE'])
def writer_detail(request, pk):
    try:
        writer = Writer.objects.get(pk=pk)
    except Writer.DoesNotExist:
        return JsonResponse({'message': 'Такой писатель не существует'}, status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        writer_serializer = WriterSerializer(writer)
        return JsonResponse(writer_serializer.data)

    elif request.method == 'PUT':
        writer_data = JSONParser().parse(request)
        writer_serializer = WriterSerializer(writer, data=writer_data)
        if writer_serializer.is_valid():
            writer_serializer.save()
            return JsonResponse(writer_serializer.data)
        return JsonResponse(writer_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        writer.delete()
        return JsonResponse({'message': 'Писатель был успешно удален!'}, status=status.HTTP_204_NO_CONTENT)


@api_view(['GET'])
def writer_list_published(request):
    writers = Writer.objects.filter(published=True)

    if request.method == 'GET':
        writers_serializer = WriterSerializer(writers, many=True)
        return JsonResponse(writers_serializer.data, safe=False)
