using System.IO;
using System.Threading.Tasks;
using Solutions.Days;
using Xunit;
using Xunit.Abstractions;

namespace Solutions.XTests.Days;

public class UnitTest08: IAsyncLifetime
{
    private readonly ITestOutputHelper _testOutputHelper;
    private readonly Day08 _day08 = new();

    private string? _input;

    public UnitTest08(ITestOutputHelper testOutputHelper)
    {
        _testOutputHelper = testOutputHelper;
    }

    private const string _handInput = @"";

    public async Task InitializeAsync()
    {
        _input = await File.ReadAllTextAsync("./Inputs/Day08.txt");
    }

    public Task DisposeAsync()
    {
        return Task.CompletedTask;
    }

    [Fact]
    public void HandTestPart1()
    {
        var answer = _day08.Part1(_handInput);
        _testOutputHelper.WriteLine(answer.ToString());
    }

    [Fact]
    public void Part1()
    {
        var answer = _day08.Part1(_input!);
        _testOutputHelper.WriteLine(answer.ToString());
        Assert.Equal(0, answer);
    }

    [Fact]
    public void HandTestPart2()
    {
        var answer = _day08.Part2(_handInput);
        _testOutputHelper.WriteLine(answer.ToString());
    }

    [Fact]
    public void Part2()
    {
        var answer = _day08.Part2(_input!);
        _testOutputHelper.WriteLine(answer.ToString());
        Assert.Equal(0, answer);
    }
}
